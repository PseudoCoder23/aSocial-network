const posts = [
  {
    id: 1,
    author: {
      name: "Phil Mangione",
      avatar: "2 mesi fa",
    },
    profilePicture: "https://picsum.photos/id/1005/600/400",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur",
    image:
      "https://resource.logitech.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3s-business-wireless-mouse/gallery/mx-master-3s-for-business-gallery-1.png?v=1",
    like: 100,
    whoLike: [
      {
        likeUserName: "Flavio",
        likeUserPicture: "https://picsum.photos/id/1011/600/400",
      },
      {
        likeUserName: "Francesco",
        likeUserPicture: "https://picsum.photos/id/1027/600/400",
      },
      {
        likeUserName: "Luigi",
        likeUserPicture: "https://picsum.photos/id/1012/600/400",
      },
      {
        likeUserName: "Laura",
        likeUserPicture: "https://picsum.photos/id/1056/600/400",
      },
      {
        likeUserName: "Genoveffa",
        likeUserPicture: "https://picsum.photos/id/1039/600/400",
      },
    ],
  },
  {
    id: 2,
    author: {
      name: "Phil Iamocela",
      avatar: "3 mesi fa",
    },
    profilePicture: "https://picsum.photos/id/1027/600/400",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur",
    image: "https://picsum.photos/id/1005/400/600",
    like: 150,
  },
  {
    id: 3,
    author: {
      name: "Phil Iannarelli",
      avatar: "1 mesi fa",
    },
    profilePicture: "https://picsum.photos/id/1015/600/400",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur",
    image: "https://picsum.photos/id/1016/400/600",
    like: 80,
    whoLike: [
      {
        likeUserName: "Flavio",
        likeUserPicture: "https://picsum.photos/id/1011/600/400",
      },
      {
        likeUserName: "Francesco",
        likeUserPicture: "https://picsum.photos/id/1027/600/400",
      },
      {
        likeUserName: "Luigi",
        likeUserPicture: "https://picsum.photos/id/1012/600/400",
      },
      {
        likeUserName: "Laura",
        likeUserPicture: "https://picsum.photos/id/1056/600/400",
      },
      {
        likeUserName: "Genoveffa",
        likeUserPicture: "https://picsum.photos/id/1039/600/400",
      },
    ],
  },
  {
    id: 4,
    author: {
      name: "Mario Rossi",
      avatar: "Oggi",
    },
    profilePicture: "https://picsum.photos/id/1003/600/400",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur",
    image: "https://picsum.photos/id/1039/400/600",
    like: 0,
  },
  {
    id: 5,
    author: {
      name: "Girolamo Seghettas",
      avatar: "Ieri",
    },
    profilePicture: "https://picsum.photos/id/1056/600/400",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit consectetur cumque alias consequuntur dolorum aspernatur!Odit consectetur cumque alias consequuntur",
    image: "https://picsum.photos/id/1060/400/600",
    like: 20,
  },
];


posts.forEach((post) => {
  let likeImagesHTML = "";
  let modalLikesHTML = "";
  let postLikesHTML = "";

  if (post.whoLike && post.whoLike.length > 0) {
    likeImagesHTML = post.whoLike
      .slice(0, 3)
      .map(
        (user) => `
      <span>
        <img src="${user.likeUserPicture}" alt="${user.likeUserName}" />
      </span>`
      )
      .join("");

    modalLikesHTML = post.whoLike
      .map(
        (user) => `
      <div class="post-user-info">
        <div class="img-user">
          <img src="${user.likeUserPicture}" alt="${user.likeUserName}">
        </div>
        <div class="user-info">
          <div id="name-user" class="name-user">${user.likeUserName}</div>
        </div>
        <button type="button" class="btn btn-primary btn-segui">Segui</button>
      </div>`
      )
      .join("");

    postLikesHTML = `
      <div class="whoLike">
        <div class="img-likes">
          ${likeImagesHTML}
        </div>
        <div class="whoLike">
          <span class="like">Piace a ${post.whoLike[0].likeUserName} e</span>
          <a class="like" data-bs-toggle="modal" data-bs-target="#staticBackdrop${post.id}" href="#">altri</a>
          <div class="modal fade" id="staticBackdrop${post.id}" data-bs-backdrop="static" 
          data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel${post.id}" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="staticBackdropLabel${post.id}">Mi piace</h1>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="staticBackdrop${post.id}">
                      ${modalLikesHTML}
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>`;
  }

  const postElement = `<div class="post">
    <div class="post-user-info">
      <div class="img-user">
        <img src="${post.profilePicture}" alt="">
      </div>
      <div class="user-info">
        <div id="name-user" class="name-user">${post.author.name}</div>
        <div id="avatar" class="last-access">${post.author.avatar}</div>
      </div>
    </div>
    <div class="post-content">
      <img id="postContent" src="${post.image}" alt="">
    </div>
    <div class="post-description">
      ${postLikesHTML}
      <div class="post-actions">
        <ul>
          <li><a href="#"><i class="fa-regular fa-heart"></i></a></li>
          <li><a href="#"><i class="fa-regular fa-comment-dots"></i></a></li>
          <li><a href="#"><i class="fa-regular fa-paper-plane"></i></a></li>
        </ul>
        <a href="#"><i class="fa-regular fa-bookmark"></i></a>
      </div>
    </div>
    <div id="postDecription" class="description">
      <span id="name-user" class="name-user">${post.author.name}</span> ${post.description}
    </div>
  </div>`;

  postContainer.innerHTML += postElement;
});

