# Reusable Components Practice

A simple repo to store my reusable components practice and lessons


Theory:
 What What makes a component reusable? (props, slots/children, composition over inheritance)

 Differences between presentational and container components.
 Prop drilling vs context.

1. One Job Only – Each block does one simple thing. For example, a Lego door only opens and closes. In React, a button component only looks and acts like a button.

2. Looks the Same Everywhere – No matter where you put the Lego door, it still works as a door. Similarly, if you use your button component on different pages, it still looks and acts the same.

3. Customizable – Just like you can put stickers on your Lego door 🚪 or change its color, in React you can pass props to change the text or style of your button (e.g., "Save", "Cancel", "Delete").

4. Reusable – Instead of making a new door from scratch every time, you reuse the same Lego door. Same with code—you don’t rewrite the button every time, you just use your button component.

5. Shared Toolbox – In a professional team, all these Lego blocks (components) are put into a shared toolbox (like a folder, library, or design system). This way, everyone on the team can grab the same block and use it, keeping everything consistent.

Example in React (our Lego block = a button):

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600"
    >
      {label}
    </button>
  );
};

// Reuse the button in different places:
<Button label="Save" onClick={handleSave} />
<Button label="Cancel" onClick={handleCancel} />
<Button label="Delete" onClick={handleDelete} />```

---

Exercise:
 Build a Button component:

 Variants (primary, secondary, danger)

 Sizes (sm, md, lg)

 Disabled state

Mini-Project:
 Build a Card component with slot-like children (header, body, footer).

 Use it with different content → blog card, product card, profile card.