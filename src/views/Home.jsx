import Button from "./Button";

function Home() {
  return (
    <div className="">
     
      <div className="absolute inset-0 bg-black/75"></div>

     
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-6 px-4 max-w-5xl mx-auto">
        <h1 className="text-6xl text-teal-50 font-bold leading-snug uppercase">
          Venha mudar sua vida e sua saúde com o
          <span className="font-bold text-red-700 [-webkit-text-stroke:0.4px_white]"> melhor</span>{" "}
          treino da região!
        </h1>

        <div className="flex gap-6">
          <Button text="Matricule-se!" color="teal" />
          <Button text="Faça uma aula avulsa!" color="teal-black" />
        </div>
      </div>
    </div>
  );
}

export default Home;
