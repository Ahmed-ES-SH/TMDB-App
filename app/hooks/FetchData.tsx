import { gener } from "../types/ContextType";

let cachedGenres: gener[] | null = null;

export default async function FetchData(api: string, paginationState: boolean) {
  try {
    // إذا كانت التصنيفات مخزنة بالفعل في الذاكرة، إرجاعها مباشرة
    if (api === "/genre/movie/list?language=en" && cachedGenres) {
      return cachedGenres;
    }

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMWYxZDc3NmExNWZkYmRiNDZiMjYxMDhmOTllNWIxOSIsIm5iZiI6MTcwNDE3MTY3MC4zMTYsInN1YiI6IjY1OTM5ODk2NjUxZmNmNWYxMzhmM2I1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0ISUadhplmr0xjyyfV5FZfu-s2pNJAn9BbAjSjasBXg",
      },
    };

    const response = await fetch(`https://api.themoviedb.org/3${api}`, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();

    // إذا كانت البيانات عبارة عن تصنيفات
    if (api === "/genre/movie/list?language=en") {
      cachedGenres = result.genres || [];
    }

    // إذا كان `paginationState` = true، نعيد البيانات مع معلومات الصفحات
    if (paginationState) {
      return {
        data: result || [],
        page: result.page || {},
        total_pages: result.total_pages || {},
      };
    }

    // إرجاع البيانات مباشرة بدون معلومات التصفح
    return result || [];
  } catch (error: unknown) {
    console.error("Error fetching data:", error);

    // يمكن إرجاع خطأ بشكل مناسب بدلاً من undefined
    return { error: "Something went wrong while fetching data." };
  }
}
