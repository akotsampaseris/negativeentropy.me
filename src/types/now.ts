export type NowSection = {
    _key: string;
    glyph: string;
    label: string;
    title: string;
    body: string;
    currentlyLabel?: string;
    short?: string;
};

export type NowType = {
    lastUpdated: string;
    sections: NowSection[];
};
