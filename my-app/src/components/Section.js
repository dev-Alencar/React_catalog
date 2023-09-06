export default function Selection(props){
    console.log(props)
    return (
        <section>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                    <ul class="games-list">
                        {props.children}
                    </ul>
                </div>
            </section>

    )
}