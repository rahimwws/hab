import { client } from "@/shared/api";
import * as FileSystem from "expo-file-system";
import { User } from "../../model/types/User";

export const profile = {
  async getUser() {
    return client.get<User>("/user/");
  },

  async uploadAvatar(uri: string): Promise<void> {
    const formData = new FormData();

    const fileUri = FileSystem.documentDirectory + "image.jpg";
    await FileSystem.copyAsync({ from: uri, to: fileUri });

    const fileInfo = await FileSystem.getInfoAsync(fileUri);
    const file = {
      uri: fileInfo.uri,
      type: "image/jpeg",
      name: "image.jpg",
    };

    formData.append("avatar", file as any);

    return client.post("/user/avatar/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
