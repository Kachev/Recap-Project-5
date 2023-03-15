

export default function FavoriteButton({handleFavorite, slug, isLiked}){
    return(
        <button type="button" onClick={() => handleFavorite(slug)}>
        {isLiked ? "Stop Like" : "Start Like"}
        </button>
    );
}