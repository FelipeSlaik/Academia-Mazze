import {
  UserGroupIcon,
  ClockIcon,
  FireIcon,
  StarIcon,
} from "@heroicons/react/16/solid";

function Features() {
  const features = [
    {
      icon: UserGroupIcon,
      title: "Treinos Personalizados",
      description: "Programas adaptados ao seu objetivo e nível.",
    },
    {
      icon: ClockIcon,
      title: "Horário Flexível",
      description: "Aberto cedo e até tarde, adaptando-se à sua rotina.",
    },
    {
      icon: FireIcon,
      title: "Ambiente Motivador",
      description: "Comunidade e música para manter você ativo.",
    },
    {
      icon: StarIcon,
      title: "Instrutores Qualificados",
      description: "Profissionais experientes.",
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center mb-12 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Nossos Diferenciais
        </h2>
        <p className="mt-4 text-gray-600 text-lg sm:text-xl md:text-2xl font-medium">
          O que faz nossa academia ser única?
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto px-4 sm:px-6">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-red-800 hover:shadow-lg transition text-center flex flex-col items-center cursor-pointer"
            >
              <Icon className="w-12 sm:w-16 h-12 sm:h-16 text-red-700 mb-4" />
              <h3 className="text-lg sm:text-xl font-bold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Features;
