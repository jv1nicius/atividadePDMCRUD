import React from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";

export type NewsProps = {
    article_id: number;
    title: string;
    link: string;
    creator: string;
    description: string;
    image_url: string;
    Journal: unknown;
};

export default function News({ article_id, title, link, creator, description, image_url, Journal }: NewsProps) {
    return (
        <View>
            <ThemedText>{article_id}</ThemedText>
            <ThemedText>{title}</ThemedText>
            <ThemedText>{link}</ThemedText>
            <ThemedText>{creator}</ThemedText>
            <ThemedText>{description}</ThemedText>
            <ThemedText>{image_url}</ThemedText>
            <ThemedText>{Journal}</ThemedText>
        </View>
    );
}