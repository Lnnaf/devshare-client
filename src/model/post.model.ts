import { CategoryModel } from "./category";
import { User } from "./user.model";

export interface PostModel {
	id: number;
	author: User;
	createdDate: string;
	modifiedDate: string;
	modifiedBy: User;
	content: string;
	title: string;
	shortDescription: string;
	viewed: number;
	thumbImageUrl: string;
	categories: CategoryModel[];
}

