import { OurFileRouter } from "@app/app/api/uploadthing/core";
import { generateComponents } from "@uploadthing/react";
 
 
export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>();