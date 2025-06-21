import css from "./MovieModal.module.css";
import type { Movie } from "../../types/movie";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({ movie, onClose }: MovieModalProps) {
  return (
    <>
      <div className={css.backdrop} role="dialog" aria-modal="true">
        <div className={css.modal}>
          <button
            className={css.closeButton}
            aria-label="Close modal"
            onClick={onClose}
          >
            ×
          </button>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title}
            className={css.image}
          />
          <div className={css.content}>
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>
              <strong>{movie.release_date}</strong>
            </p>
            <p>
              <strong>Rating:</strong>
              {movie.vote_average}/10
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
