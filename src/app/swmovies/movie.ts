export interface Movie {
    episode_id?: string | number,
    title?: string,
    name?: string,
    director?: string,
    producer?: string,
    release_date?: string,
    skin_color?: string,
    eye_color?: string,
    birth_year?: string,
    characters?: string[],
    films?: string[],
    opening_crawl?: string,
    url?: string,
    [propName: string]: any;
}

