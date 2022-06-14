import axios from 'axios';
import cheerio from 'cheerio';

export const getHTML = async (url: string): Promise<any> => {
  try {
    return await axios.get(url);
  } catch (err) {
    console.log(err);
    return err;
  }
};
