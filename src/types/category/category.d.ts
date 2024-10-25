interface ICategoryDto {
  categoryId: number;
  categoryName: string;
  categoryMainColor: string;
  categorySubColor: string;
}

interface IGetCategoriesByGroup {
  categoryList: ICategoryDto[];
}
