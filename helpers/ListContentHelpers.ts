import ListContent from '../models/ListContent';
import * as TheCatApiHelpers from './TheCatApiHelpers';

export const getListContents = async (count: number): Promise<ListContent[]> => {
  var listContents: Array<ListContent> = [];
  for (let i = 0; i < count; i++) {
    const catImage = await TheCatApiHelpers.fetchCatImage();
    const listContent : ListContent = {
      id: i.toString(),
      avatarImageUrl: catImage.url,
      itemTextPrimary: catImage.id,
      itemTextSecondary: catImage.url,
    };
    listContents.push(listContent);
  };
  return listContents;
};
