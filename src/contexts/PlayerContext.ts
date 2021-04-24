import { createContext } from 'react';

// Informações que serão utilizadas para o PLAYER
type Episode = {
    title: string;
    members: string;
    thumbnail: string;
    duration: number;
    url: string;
};

type PlayerContextData = {
    episodeList: Episode[];
    currentEpisodeIndex: number;
    play: (episode: Episode) => void;
    isPlaying: boolean;
    togglePlay:() => void;
};

export const PlayerContext = createContext({} as PlayerContextData);