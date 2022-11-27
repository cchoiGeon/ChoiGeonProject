exports.Adiv= `
<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floortwo()">
                <div class="fw-bold">A동</div>
                </button>
                <div>
                2층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="A-2">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorthree()">
                <div class="fw-bold">A동</div>
                </button>
                <div>
                3층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="A-3">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorfour()">
                <div class="fw-bold">A동</div>
                </button>
                <div>
                4층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="A-4">14</span>
            </li>
        </ol>  
    </div>
    <div class="card mb-4">
        <div style="display: none" id="floor2">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">201</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">203</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">301</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">303</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">401</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">403</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</div>`
exports.Bdiv= `
<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floortwo()">
                <div class="fw-bold">B동</div>
                </button>
                <div>
                2층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="B-2">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorthree()">
                <div class="fw-bold">B동</div>
                </button>
                <div>
                3층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="B-3">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorfour()">
                <div class="fw-bold">B동</div>
                </button>
                <div>
                4층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="B-4">14</span>
            </li>
        </ol>  
    </div>
    <div class="card mb-4">
        <div style="display: none" id="floor2">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">201</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">203</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">301</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">303</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">401</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">403</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</div>
`
exports.Cdiv=`<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floortwo()">
                <div class="fw-bold">C동</div>
                </button>
                <div>
                2층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="C-2">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorthree()">
                <div class="fw-bold">C동</div>
                </button>
                <div>
                3층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="C-3">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorfour()">
                <div class="fw-bold">C동</div>
                </button>
                <div>
                4층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="C-4">14</span>
            </li>
        </ol>  
    </div>
    <div class="card mb-4">
        <div style="display: none" id="floor2">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">201</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">203</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">301</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">303</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">401</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">403</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</div>
`
exports.Ddiv=`<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floortwo()">
                <div class="fw-bold">D동</div>
                </button>
                <div>
                2층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="D-2">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorthree()">
                <div class="fw-bold">D동</div>
                </button>
                <div>
                3층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="D-3">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorfour()">
                <div class="fw-bold">D동</div>
                </button>
                <div>
                4층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="D-4">14</span>
            </li>
        </ol>  
    </div>
    <div class="card mb-4">
        <div style="display: none" id="floor2">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">201</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">203</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">301</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">303</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">401</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">403</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</div>
`
exports.Ediv=`<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floortwo()">
                <div class="fw-bold">E동</div>
                </button>
                <div>
                2층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="E-2">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorthree()">
                <div class="fw-bold">E동</div>
                </button>
                <div>
                3층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="E-3">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorfour()">
                <div class="fw-bold">E동</div>
                </button>
                <div>
                4층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="E-4">14</span>
            </li>
        </ol>  
    </div>
    <div class="card mb-4">
        <div style="display: none" id="floor2">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">201</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">203</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">301</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">303</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">401</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">403</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</div>
`
exports.Sangyoungdiv=`<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <ol class="list-group list-group-numbered">
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light"onclick="floortwo()">
                <div class="fw-bold">산학융합관</div>
                </button>
                <div>
                2층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="sangyoung">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorthree()">
                <div class="fw-bold">산학융합관</div>
                </button>
                <div>
                3층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="sangyoung">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <button type="button" class="btn btn-light" onclick="floorfour()">
                <div class="fw-bold">산학융합관</div>
                </button>
                <div>
                4층
                </div>
            </div>
            <span class="badge bg-primary rounded-pill" id="sangyoung">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <button type="button" class="btn btn-light" onclick="floorfive()">
                    <div class="fw-bold">산학융합관</div>
                    </button>
                    <div>
                    5층
                    </div>
                </div>
                <span class="badge bg-primary rounded-pill" id="sangyoung">14</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">   
                <div class="ms-2 me-auto">
                    <!-- 여기서 층수를 클릭하면 바로 아래 지도와 함께 또는 지도 없이 강의실 호수와 사용여부를 보여주는 것을 만들면 된다 -->
                    <button type="button" class="btn btn-light" onclick="floorsix()">
                    <div class="fw-bold">산학융합관</div>
                    </button>
                    <div>
                    6층
                    </div>
                </div>
                <span class="badge bg-primary rounded-pill" id="sangyoung">14</span>
            </li>
        </ol> 
    </div>
    <div class="card mb-4">
        <div style="display: none" id="floor2">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">201</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">202</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">203</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">301</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">302</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">303</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor4">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">401</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">402</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">403</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor5">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">501</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">502</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">503</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
        <div style="display: none" id="floor6">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">사용여부</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">601</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">602</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>  
                  </tr>
                  <tr>
                    <th scope="row">603</th>
                    <td>사용가능</td>
                    <td>
                        <a href="#">입실</a>
                        <a href="#">예약</a>
                        <a href="#">퇴실</a>
                    </td>
                  </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
</div>
`


exports.Sangyoungscript=`
<script>
  function floortwo(){
      var floor = document.getElementById('floor2')
      if(floor.style.display == 'block'){
          floor.style.display = 'none';
      }
      else{
          floor.style.display = 'block';
      }
  }
  function floorthree(){
      var floor = document.getElementById('floor3')
      if(floor.style.display == 'block'){
          floor.style.display = 'none';
      }
      else{
          floor.style.display = 'block';
      }
  }
  function floorfour(){
      var floor = document.getElementById('floor4')
      if(floor.style.display == 'block'){
          floor.style.display = 'none';
      }
      else{
          floor.style.display = 'block';
      }
  }
  function floorfive(){
      var floor = document.getElementById('floor5')
      if(floor.style.display == 'block'){
          floor.style.display = 'none';
      }
      else{
          floor.style.display = 'block';
      }
  }
  function floorsix(){
      var floor = document.getElementById('floor6')
      if(floor.style.display == 'block'){
          floor.style.display = 'none';
      }
      else{
          floor.style.display = 'block';
      }
  }
</script>
`

exports.script=`
<script>
    function floortwo(){
        var floor = document.getElementById('floor2')
        if(floor.style.display == 'block'){
            floor.style.display = 'none';
        }
        else{
            floor.style.display = 'block';
        }
    }
    function floorthree(){
        var floor = document.getElementById('floor3')
        if(floor.style.display == 'block'){
            floor.style.display = 'none';
        }
        else{
            floor.style.display = 'block';
        }
    }
    function floorfour(){
        var floor = document.getElementById('floor4')
        if(floor.style.display == 'block'){
            floor.style.display = 'none';
        }
        else{
            floor.style.display = 'block';
        }
    }
</script>
`