import moment from "moment";

export const syncDocuments = (collection: {
  deviceDocs: any[];
  cloudDocs: any[];
  callback?: any;
  output?: any;
}): void => {
  const { deviceDocs, cloudDocs, callback, output } = collection;
  cloudDocs.forEach(cloudDoc => {
    const index = deviceDocs.findIndex(deviceDoc => deviceDoc.id === cloudDoc.id);
    if (index === -1) {
      deviceDocs.push(cloudDoc);
      if (callback) callback(cloudDoc, output);
    } else {
      const deviceDoc = deviceDocs[index];
      if (cloudDoc.updatedAt) {
        if (!deviceDoc.updatedAt || moment(cloudDoc.updatedAt).isSameOrAfter(deviceDoc.updatedAt))
          deviceDocs[index] = cloudDoc;
      }
    }
  });
};

export const transactionCallback = (transaction, output): void => {
  // re-calculate user cash balance
  const total = Number(transaction.totalatax);
  output.changeInCash += !isNaN(total) ? total : 0;

  // re-calculate product stock quantity
  const productList = transaction.itemslist ? transaction.itemslist : [];
  productList.forEach(product => {
    const currentProduct = output.products.find(data => data.code === product.code);
    const quantity = Number(product.qty);
    const currentStock = Number(currentProduct.stock_qty);
    if (!isNaN(quantity) && !isNaN(currentStock)) {
      currentProduct.stock_qty = currentStock - quantity;
      console.log(`new cloud transaction: ${product.name} stock quantity decreased by: ${quantity}`);
    }
  });
};
