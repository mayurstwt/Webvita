const Features: React.FC = () => {
    const features = [
      {
        title: "Creative Strategy",
        description: "Developing impactful strategies to elevate your brand's identity and presence.",
        icon: "🎨",
      },
      {
        title: "Content Creation",
        description: "Crafting engaging and compelling content that resonates with your audience.",
        icon: "✍️",
      },
      {
        title: "Digital Marketing",
        description: "Driving growth with data-driven marketing solutions across all digital platforms.",
        icon: "📈",
      },
      {
        title: "Social Media Management",
        description: "Building and managing your online presence to engage with your audience.",
        icon: "📱",
      },
      {
        title: "Media Production",
        description: "Delivering high-quality video and photo content to tell your brand's story.",
        icon: "🎥",
      },
      {
        title: "Branding & Design",
        description: "Creating logos, visuals, and designs that reflect your brand's unique identity.",
        icon: "🖌️",
      },
    ];
  
    return (
      <div className="bg-black text-white w-screen min-h-screen flex py-32 md:py-0 px-4 md:px-0 items-center">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-b from-purple-400 to-orange-400 text-transparent bg-clip-text mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl bg-gradient-to-b from-purple-400 to-orange-400 text-transparent bg-clip-text mb-12">
            Discover the wide range of services we offer to elevate your brand to the next level.
          </p>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className=" bg-gray-800 min-h-[20rem] px-5 rounded-2xl flex justify-center items-center flex-col shadow-lg hover:shadow-2xl transition transform hover:scale-[1.03]"
              >
                {/* Icon */}
                <div className="text-5xl mb-4 text-orange-500">{feature.icon}</div>
                {/* Feature Title */}
                <h3 className="text-2xl font-bold bg-gradient-to-b from-white to-orange-500 text-transparent bg-clip-text">
                  {feature.title}
                </h3>
                {/* Feature Description */}
                <p className="mt-2 text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  