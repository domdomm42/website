import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function uploadImageToS3(imageUrl: string, fileName: string) {
  try {
    const urlMatch = imageUrl.match(/\((.*?)\)/);
    const actualUrl = urlMatch ? urlMatch[1] : imageUrl;

    const response = await fetch(actualUrl);
    const buffer = await response.arrayBuffer();

    const key = `blog-images/${fileName}`;

    await s3Client.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: key,
        Body: Buffer.from(buffer),
        ContentType: response.headers.get("content-type") ?? undefined,
      })
    );

    return `https://${process.env.AWS_BUCKET_NAME}.s3-${process.env.AWS_REGION}.amazonaws.com/blog-images/${fileName}`;
  } catch (error) {
    console.error("Error uploading image to S3:", error);
    throw error;
  }
}
