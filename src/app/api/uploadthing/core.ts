import { getServerSession } from "next-auth";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { authOptions } from "../auth/[...nextauth]/options";

const f = createUploadthing();

async function getUserId() {
  const session: any = await getServerSession(authOptions);
  console.log('session', session?.user?.id)
  return session?.user?.id
}


// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function
const auth = async (req: Request) => ({ id: await getUserId()}); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new Error("Unauthorized");

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId:", metadata.userId);

      try {
        const res = await fetch(`${process.env.HOST}/api/users/${metadata.userId}`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
              newAvatar: file.url,
            }),
        });

        if (!res.ok) {
            throw new Error('Failed to update a profile.');
        }
    } catch (error) {
        console.log(error);
    }

      console.log("file url", file.url);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;