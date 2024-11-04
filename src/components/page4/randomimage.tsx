{/* Concentric Circles */ }
{
    [...Array(8)].map((_, i) => {
        // Generate a random angle for each image
        const randomAngle = Math.floor(Math.random() * 360);

        return (
            <div
            key= { i }
        className = {`absolute rounded-full border border-gray-800`
    }
            style = {{
        width: `${150 + i * 150}px`, // Adjust for spacing between circles
        height: `${150 + i * 150}px`,
        zIndex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}
        >
    {/* Position Image at Random Angle */ }
    < img
src = {`/pagefourasset/ligal.png`}
className = "w-10 h-10 rounded-full absolute"
style = {{
    transform: `rotate(${randomAngle}deg) translate(${(150 + i * 150) / 2}px)`, // Moves image to the circumference
                }}
            />
    </div>
    );
})}
