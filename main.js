// class Node {
//   constructor(data) {
//     this.data = data;
//     this.next = null;
//   }
// }
// // const NodeOne=new Node(200)
// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }
//   addToHead(value) {
//     let newNode = new Node(value);
//     // console.log(newNode);
//     // !this.head==null
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       newNode.next = this.head;
//       this.head = newNode;
//     }
//   }
//   addToEnd(value) {
//     let newNode = new Node(value);
//     // console.log(newNode);
//     // !this.head==null
//     if (!this.head) {
//       this.head = newNode;
//       this.tail = newNode;
//     } else {
//       this.tail.next = newNode;
//       this.tail = newNode;
//     }
//   }
// }
// const list = new LinkedList();
// list.addToHead(1);
// list.addToHead(2);
// list.addToHead(3);
// list.addToEnd(4);
// console.log(list);

// ===============================================================
// const imges = {
//   src: "https://cdn.pixabay.com/photo/2021/08/06/05/04/mountain-6525356__340.jpg",
//   next: {
//     src: "https://cdn.pixabay.com/photo/2020/03/12/22/26/drops-4926381__340.jpg",
//     next: {
//       src: "https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556__340.jpg",
//       next: {
//         src: "https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041__340.jpg",
//         next: {
//           src: "https://cdn.pixabay.com/photo/2021/07/20/03/39/fisherman-6479663__340.jpg",
//           next: {
//             src: "https://cdn.pixabay.com/photo/2021/10/02/09/18/airplane-6674689__340.jpg",
//             next: null,
//           },
//         },
//       },
//     },
//   },
// };
// sec.innerHTML += `<img src="${imges.src}">`;
// console.log(imges);
// btnNext.onclick = () => {
//   let nextImg=imges.next
//   sec.innerHTML = `<img src="${nextImg.src}">`;
// };

// ===================================================================
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// const NodeOne=new Node(200)
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  addToHead(value) {
    let newNode = new Node(value);
    // console.log(newNode);
    // !this.head==null
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
        newNode.next = img.head;
        img.head = newNode;
        imgId.src = `${img.head.data}`;
      };
    
  }

  addToEnd(value) {
    let newNode = new Node(value);
    // console.log(newNode);
    // !this.head==null
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
}
const img = new LinkedList();
img.addToHead(
  `https://cdn.pixabay.com/photo/2021/08/06/05/04/mountain-6525356__340.jpg`
);
img.addToHead(
  `https://cdn.pixabay.com/photo/2020/03/12/22/26/drops-4926381__340.jpg`
);
img.addToHead(
  `https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556__340.jpg`
);
img.addToHead(
  `https://cdn.pixabay.com/photo/2021/09/26/14/37/milky-way-6657951__340.jpg`
);
console.log(img);
imgId.src = `${img.head.data}`;

let counter=img.head
btnNext.onclick = () => {
  counter=counter.next
  imgId.src = `${counter.data}`;
  }
  