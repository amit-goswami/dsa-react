const treeData = {
  name: "A",
  children: [
    {
      name: "B",
      children: [
        {
          name: "E",
        },
        {
          name: "F",
        },
      ],
    },
    {
      name: "C",
      children: [
        {
          name: "G",
          children: [
            {
              name: "I",
            },
          ],
        },
      ],
    },
    {
      name: "D",
      children: [
        {
          name: "H",
        },
      ],
    },
  ],
};

const TreeNode = ({
  node,
}: {
  node: {
    name: string;
    children?: { name: string; children?: { name: string }[] }[];
  };
}) => {
  return (
    <div className="tree-node">
      <h4>{node.name}</h4>
      {node.children &&
        node.children.map((child) => (
          <div className="tree-sub-node" key={child.name}>
            <TreeNode node={child} />
          </div>
        ))}
    </div>
  );
};

export const TreeRenderer = () => {
  return <TreeNode node={treeData} />;
};
