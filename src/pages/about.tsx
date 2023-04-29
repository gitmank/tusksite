import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
    return(
        <div className='flex select-none flex-col font-scpro h-screen w-screen'>
            <Header />
            <main className="flex text-lg md:text-xl flex-col h-4/6 w-8/12 self-center items-start gap-10 justify-start">
                <h1 className="text-5xl font-bold">About Us</h1>
                <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat quia natus sunt illo ratione necessitatibus, exercitationem accusamus cupiditate ipsam perferendis id blanditiis ducimus corporis pariatur dolorum non sed quas obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eligendi mollitia maxime ipsa ratione quos corrupti voluptates totam commodi deleniti! Saepe praesentium animi rem corporis ullam alias quibusdam unde vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptates consequuntur similique quos sequi totam molestias at reiciendis corporis magni molestiae tempora aut ipsa laboriosam, eligendi vero accusantium qui nam.</h6>
                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo enim repellat suscipit officiis, quia rerum dignissimos autem tenetur cumque consectetur quam consequatur nulla, tempore impedit sit, animi molestiae fugit. Quia. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, tenetur quo labore fuga eos inventore quibusdam repellat. Natus laborum architecto vero molestias nihil ratione ipsum animi cupiditate, maxime, excepturi sequi.</h6>
            </main>
            <Footer />
        </div>
    )
}