class ClubItem extends HTMLElements {
    set club(club) {
        this._club;
        this.render()
    }

    render() {`
        <img class="fan-art-club" src= "${fanArt}" alt="Fan Art">
        <div class="club-info">
            <h2>${name}</h2>
            <p>${description}</p>
        </div>
    `;
    }
}

customElements.define('club-item', ClubItem);