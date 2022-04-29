export const getElem = id => document.getElementById(id);

export const renderHTML = data => {
  let content = "";
  for (let i = 0; i < data.length; ++i) {
    const user = data[i];
    if (user.userType !== "teacher") continue;
    content += `
      <div class="col-lg-3 col-6 wow animate__animated animate__fadeIn" data-wow-delay="0.${i}s">
        <div class="experts-item text-center">
          <div class="experts__img-box">
            <img
              class="experts__img"
              src="assets/images/${user.image}"
              alt="teacher ${i + 1}"
            />
          </div>
          <div class="experts-body">
            <h4 class="experts__language text-uppercase">${user.language}</h4>
            <h3 class="experts__name text-capitalize">${user.fullName}</h3>
            <p class="experts__description">
              ${user.description}
            </p>
          </div>
        </div>
      </div>
    `;
  }

  getElem("experts-table").innerHTML = content;
};
