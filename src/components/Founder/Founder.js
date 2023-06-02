import "./Founder.css"

export default function Founder(){

        const fndr = [
            { id: "1",
              image: "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=996&t=st=1685594745~exp=1685595345~hmac=471e7138ff5603f86843aee8263aa56067a700b8a7aa269d1fdf691715d4c0f7",
              name_ach: "Марина Федотова",
              desr: "Главный по Front-end разработке"
             
           },
           { id: "2",
           image: "https://img.freepik.com/free-photo/waist-up-portrait-of-handsome-serious-unshaven-male-keeps-hands-together-dressed-in-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1685594950~exp=1685595550~hmac=99522770fbf91ce5664f60906875543075e044c6f9ff585d2009404a888cb670",
           name_ach: "Пётр Жуков",
           desr: "Back-end разработчик, 5 лет опыта"
          
        },            
        { id: "3",
        image: "https://img.freepik.com/free-photo/confident-young-businessman-in-suit-standing-with-arms-folded_171337-18599.jpg?w=996&t=st=1685595069~exp=1685595669~hmac=739d12119de5bedebb7c65657898046f8747a27e86367368a5f6d5abdd6d2e32",
        name_ach: "Алексей Александров",
        desr: "Тимлид нашей команды"
       
     },            { id: "4",
     image: "https://img.freepik.com/free-photo/young-and-beautiful-woman-in-pink-warm-sweater-natural-look-smiling-portrait-on-isolated-long-hair_285396-896.jpg?w=996&t=st=1685595115~exp=1685595715~hmac=4d14354c62d155a0d18a0c1dc2696c9f0f6339dcf04c91f0c6f5be4555540eb7",
     name_ach: "Екатерина Романова",
     desr: "UX-UI Дизайнер"
    
  }
          ]
          const parserFendors = ({id,name_ach,image, desr}) => 
          <div className="founders__grid_item" key={id}>
            <div className="founders__grid_item-image" style={{backgroundImage: `url(${image})`}}/>
            <h2 className="founders__grid_item__header_text">{name_ach}</h2>
            <p>{desr}</p>
          </div>  


    return(
        <div className="founders">
        <p className="founders__header_text">Our Founders</p>
        <div className="founders__grid">
        
        {fndr.map(parserFendors)}
      </div>

        </div>
    )
}