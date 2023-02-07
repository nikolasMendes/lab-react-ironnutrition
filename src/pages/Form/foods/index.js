
export function FoodName(props) {
  return <div>
    <img src{props.image} />
<p> {props.name} </p>
<p> {props.servings} </p>
<p> {props.calories} </p>

  </div>;
}
