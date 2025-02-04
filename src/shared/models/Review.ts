// Определяем тип для объекта пользователя
export interface User {
    name: string;
    link: string;
    contributor_id: string;
    thumbnail: string;
    reviews: number;
    photos: number;
  }
  
  // Определяем тип для объекта извлечённого сниппета (оригинального и переведённого текста)
  export interface ExtractedSnippet {
    original: string;
    translated: string;
  }
  
  // Определяем тип для отзыва
  export interface ReviewType {
    link: string;
    rating: number;
    date: string;
    iso_date: string;
    iso_date_of_last_edit: string;
    source: string;
    review_id: string;
    user: User;
    snippet: string;
    extracted_snippet: ExtractedSnippet;
    likes: number;
  }
  
  // Если требуется тип для массива отзывов:
  export type Reviews = ReviewType[];
  