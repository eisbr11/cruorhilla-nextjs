interface IPlaceholderProps {
  componentName: string
}

const Placeholder = ({ componentName }: IPlaceholderProps) => (
  <div>
    {`The component ${componentName} has not been created yet.`}
  </div>
);

export default Placeholder;
