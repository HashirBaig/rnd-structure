$(document).ready(() => {
  const tree = createTree(data);

  // Display the tree
  const treeContainer = $(".tree-container");
  tree.forEach((root) => {
    displayTree(root, treeContainer);
  });
});

const check = {
  registration: true,
  filter: true,
};

function createTree(data) {
  const map = {};
  const roots = [];

  // Create a mapping of nodes based on their IDs
  data.forEach((nodeData) => {
    const { id, pid, cid, type, customer_counts, customer_percent, name } =
      nodeData;
    const newNode = {
      id,
      pid,
      cid,
      name,
      type,
      customer_counts,
      customer_percent,
      children: [],
    };

    map[id] = newNode;

    if (pid === 0) {
      // If the node has a parent ID of 0, it is a root node
      roots.push(newNode);
    } else {
      // Otherwise, add the node as a child of its parent
      const parent = map[pid];
      parent.children.push(newNode);
    }
  });

  return roots;
}

function displayTree(root, parentElement) {
  const children = root?.children;
  const color = getNodeThemeByType(root?.type);

  const nodeLableStyles = `background-color: ${color};`;
  const nodeStyles = `border: 1px solid ${color}; border-radius: 6px;`;
  const nodeBubbleStyles = `
    border: 1px solid ${color};
    border-radius: 6px;
    background-color: white;
    color: ${color};
  `;

  const node = `
    <div id="wrapper">
      <div id="node" style="${nodeStyles}">
        <div id="node-label" style="${nodeLableStyles}">
          <i class="${getNodeSymbolByType(root?.type)}"></i>
        </div>
        <div id="node-content">
          <h5>${getName(root?.name)}</h5>
          <p>${getNodeType(root?.type)}</p>
        </div>
        <div id="info-container">
          <span id="count-bubble" style="${nodeLableStyles}">
            ${root?.customer_counts || ""}
          </span>  
          <span id="percent-bubble" style="${nodeBubbleStyles}">
            ${root?.customer_percent || ""}
          </span>
        </div>
      </div>
    </div>
  `;

  const tree = $(`<div></div>`).addClass("tree");
  const ul = $(`<ul></ul>`).addClass("ul");
  const li = $(`<li></li>`).addClass("li");
  const div = $(node);

  li.append(div);
  ul.append(li);

  if (root?.cid !== 0) {
    div.addClass("parent");
  }

  if (check[root?.type] && root?.id > 1) {
    ul.addClass("sub-tree");
    tree.append(ul);
    $(".tree-container").append(tree);
  } else if (check[root?.type] && root?.id === 1) {
    tree.append(ul);
    $(".tree-container").append(tree);
  } else {
    if (root?.pid !== 0) {
      parentElement.append(li);
    } else {
      parentElement.append(ul);
    }
  }

  if (children?.length > 0) {
    const childUl = $(`<ul></ul>`).addClass("ul");
    li.append(childUl);

    children?.forEach((child) => {
      displayTree(child, childUl);
    });
  }
}

// function displayTree(root, parentElement) {

//     const node = `
//         <div class="node">
//             <div class="node-label">
//                 &nbsp;
//             </div>
//             <div class="node-desc">
//                 <h6 id="name">${root?.name}</h6>
//                 <p id="description"></p>
//             </div>
//             <div class="bubble-container">
//                 <div class="info-bubble info-bubble-outline">
//                     <span>90%</span>
//                 </div>
//                 <div class="info-bubble">
//                     <span>12341</span>
//                 </div>
//             </div>
//         </div>
//     `

//     parentElement.html(node)

//     if (root.children.length > 0) {

//         const childUl = $("<div></div>").addClass("nested");
//         parentElement.html(childUl);

//         root.children.forEach(child => {
//             displayTree(child, childUl);
//         });

//         // const childUl = $("<ul></ul>").addClass("nested");
//         // const li = $("<li></li>").append(childUl);
//         // node.append(li);

//         // root.children.forEach(child => {
//         //     displayTree(child, childUl);
//         // });
//     }
// }

// function displayTree(root, parentElement) {
//     const ul = $(`<ul></ul>`);
//     const li = $(`<li></li>`);
//     const span = $(`<span></span>`).text(root.name);
//     li.append(span);
//     ul.append(li);
//     parentElement.append(ul);

//     if (root.children.length > 0) {
//         const childUl = $(`<ul></ul>`).addClass("nested");
//         li.addClass("caret");
//         li.append(childUl);

//         root.children.forEach(child => {
//             displayTree(child, childUl);
//         });
//     }
// }

// function displayNames(data) {
//     data.forEach(node => {
//       console.log(node.name);
//       if (node.children && node.children.length > 0) {
//         displayNames(node.children);
//       }
//     });
//   }
