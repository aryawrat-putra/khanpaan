export const Colors = {
    light: {
        background: '#dfe4e8',
        foreground: '#111928',
        primary: '#111313',
        primaryForeground: '#ffffff',
        secondary: '#f6f4f2',
        secondaryForeground: '#111313',
        muted: '#eef2f0',
        mutedForeground: '#65716d',
        accent: '#fff0ec',
        accentForeground: '#111313',
        destructive: '#ff3d1d',
        border: '#d8dde2',
    },
    dark: {        
        background: '#252525',
        foreground: '#FAFAFA',
        primary: '#EBEBEB',
        primaryForeground: '#343434',
        secondary: '#454545',
        secondaryForeground: '#FAFAFA',
        muted: '#454545',
        mutedForeground: '#AFAFAF',
        accent: '#454545',
        accentForeground: '#FAFAFA',
        destructive: '#F87171',
        border: '#1A1A1A',
    },
} as const;


export type ColorsType = typeof Colors.light | typeof Colors.dark;