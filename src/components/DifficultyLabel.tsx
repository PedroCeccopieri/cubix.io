

export function DifficultyLabel({ difficulty }: { difficulty: 1 | 2 | 3 | 4 | 5 }) {

  return (
    <div className="flex gap-1" aria-label={`Dificuldade ${difficulty} de 5`}>
      {[1, 2, 3, 4, 5].map((level) => (
        <span
          key={level}
          className={`h-2 w-2 rounded-full ${level <= difficulty ? "bg-foreground" : "bg-muted-foreground/20"}`}
        />
      ))}
    </div>
  );
}