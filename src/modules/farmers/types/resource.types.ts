export interface Resource {
    title: string;
    category: string;
    resourceType: string;
    location?: string;
    tags?: string[];
    description: string;
    content: string;
    youtubeLink?: string;

    image: string;
    pdf?: string;

    authorId: string;
    authorName: string;
    authorRole: string;

    status: "pending" | "approved" | "rejected";

    createdAt: Date;
    updatedAt: Date;
}
