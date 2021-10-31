import { getPublicAxios } from "../axios";

export const getFiles = () => getPublicAxios().get("files");