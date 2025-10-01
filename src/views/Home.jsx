import Button from "./Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4 max-w-5xl mx-auto pt-24">
      <h1 className="text-6xl text-teal-50 font-bold leading-snug uppercase">
        Venha mudar sua vida e sua saúde com o
        <span className="font-bold text-red-700 [-webkit-text-stroke:0.4px_white]">
          {" "}
          melhor
        </span>{" "}
        treino da região!
      </h1>

      <div className="flex gap-6">
        <Button text="Matricule-se!" color="teal" />
        <Button text="Faça uma aula avulsa!" color="teal-black" />
      </div>
    </div>
  );
}

export default Home;
