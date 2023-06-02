import "./Achives.css"

export default function Achives(){

        const books = [
            { id: "B09123N2QN",
              image: "https://cdn4.iconfinder.com/data/icons/education-8-2/66/374-1024.png",
              name_ach: "Все в срок",
              desr: "Lorem ipsum dolor sit amet jera ou-fiop comuteroj tarmsaz",
             
           },
           { id: "B09123N2QN",
           image: "https://cdn4.iconfinder.com/data/icons/education-8-2/66/374-1024.png",
           name_ach: "Все в срок",
           desr: "Lorem ipsum dolor sit amet jera ou-fiop comuteroj tarmsaz",
          
        },            { id: "B09123N2QN",
        image: "https://cdn4.iconfinder.com/data/icons/education-8-2/66/374-1024.png",
        name_ach: "Все в срок",
        desr: "Lorem ipsum dolor sit amet jera ou-fiop comuteroj tarmsaz",
       
     },            { id: "B09123N2QN",
     image: "https://cdn4.iconfinder.com/data/icons/education-8-2/66/374-1024.png",
     name_ach: "Все в срок",
     desr: "Lorem ipsum dolor sit amet jera ou-fiop comuteroj tarmsaz",
    
  }
          ]
          const Book = ({id,name_ach,image, desr}) => 
          <div className="achives__grid_item" key={id}>
            <img className="achives__grid_item-image" alt={`cover of ${name_ach}`} src={image}  style={{height: "64px"}}/>
            <h2 className="achives__grid_item-name">{name_ach}</h2>
            <p className="achives__grid_item-description">{desr}</p>
          </div>  


    return(
        <div className="achives">
        <p className="achives__text">Our Achives</p>
        <div className="achives__grid">
        
        {books.map(Book)}
      </div>

        </div>
    )
}