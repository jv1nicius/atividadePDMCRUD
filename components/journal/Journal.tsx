import React from "react";
import { View } from "react-native";
import { ThemedText } from "../ThemedText";

export type JournalProps = {
    source_name: string;
    source_url: string;
    News: unknown[];
};

export default function Journal({source_name, source_url, News}:JournalProps) {
        return(
            <View>
                <ThemedText>{source_name}</ThemedText>
                <ThemedText>{source_url}</ThemedText>
            </View>
        );
}