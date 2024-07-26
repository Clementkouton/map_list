export default function List({ members, onDelete }) {
  return (
    <>
      {members.map((person) => {
        const { id, name, post, Image } = person;
        return (
          <article key={id} className="container-item">
            <img src={person.Image} alt={person.name} />
            <div>
              <h4 className="name">{name}</h4>
              <h5 className="post">{post}</h5>
              <h6 className="reward">{person.reward}</h6>
              <button onClick={() => onDelete(id)}>Supprimer</button>
            </div>
          </article>
        );
      })}
    </>
  );
}