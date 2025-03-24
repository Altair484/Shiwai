const Aquarelles = () => {
    const aquarelles = [
        {
            id: 1,
            title: "Paysage de montagne",
            image: "/assets/aquarelle1.jpg",
            description: "Aquarelle sur papier, 30x40cm"
        },
        {
            id: 2,
            title: "Vue sur la mer",
            image: "/assets/aquarelle2.jpg",
            description: "Aquarelle sur papier, 25x35cm"
        },
        {
            id: 3,
            title: "Forêt automnale",
            image: "/assets/aquarelle3.jpg",
            description: "Aquarelle sur papier, 40x50cm"
        },
        // Ajoutez d'autres aquarelles ici
    ];

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Mes Aquarelles</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Découvrez ma collection d'aquarelles, où chaque œuvre raconte une histoire unique.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {aquarelles.map((aquarelle) => (
                        <article key={aquarelle.id} className="flex flex-col items-start">
                            <div className="relative w-full">
                                <img
                                    src={aquarelle.image}
                                    alt={aquarelle.title}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                            </div>
                            <div className="max-w-xl">
                                <div className="mt-6">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                        {aquarelle.title}
                                    </h3>
                                    <p className="mt-5 text-sm leading-6 text-gray-600">
                                        {aquarelle.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Aquarelles; 