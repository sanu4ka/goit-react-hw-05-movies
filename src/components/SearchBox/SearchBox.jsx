export const SearchBox = ({ onSubmit }) => {
  return (
    <form onSubmit={e => onSubmit(e)}>
      <input name="name" type="text" />
      <button type="submit">Search</button>
    </form>
  );
};
