import Button from "./Button";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 px-4 sm:px-6 md:px-8 max-w-5xl mx-auto pt-24">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-teal-50 font-bold leading-snug uppercase">
        Venha mudar sua vida e sua saúde com o
        <span className="font-bold text-red-700 [-webkit-text-stroke:0.4px_white]">
          {" "}
          melhor
        </span>{" "}
        treino da região!
      </h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6">
        <Button
          text="Matricule-se!"
          color="teal"
          href="https://wa.me/5511985145797?text=Olá!%20Quero%20me%20matricular%20na%20Academia%20Mazze."
        />
        <Button
          text="Faça uma aula avulsa!"
          color="teal-black"
          href="https://wa.me/5511985145797?text=Olá!%20Quero%20fazer%20uma%20aula%20avulsa%20na%20Academia%20Mazze."
        />
      </div>
    </div>
  );
}

export default Home;
