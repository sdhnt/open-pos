import axios from "axios";

export const hasInternet = async (url?: string): Promise<boolean> => {
  try {
    if (!url) url = "https://us-central1-open-fintech.cloudfunctions.net/data/versionNumber";
    await axios.get(url);
    return true;
  } catch (error) {}
};
