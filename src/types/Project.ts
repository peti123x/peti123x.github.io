import type {Tag} from "@/types/Tag";

export interface TProject
{
    name: string,
    link: string,
    description: Array<string>,
    tags: Array<Tag>,
}