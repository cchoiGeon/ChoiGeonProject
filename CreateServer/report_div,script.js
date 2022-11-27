exports.div = `
<div id="layoutSidenav_content">
<main>
    <div class="container-fluid px-4">
        <h1 class="mt-4">신고하기</h1>
        <div class="card mb-4">
            <div class="card-body">
                장시간 자리를 비우거나 퇴실을 누르지 않거나 강의실을 예약한 뒤 입실하지 않은 사용자를 신고 해주시길 바랍니다
            </div>
        </div>
        <div class="card mb-4">
            <div class="card-header">
                <i class="fas fa-table me-1"></i>
                해당 건물
            </div>
        </div>
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              해당 건물
            </a>
          
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">A동</a></li>
              <li><a class="dropdown-item" href="#">B동</a></li>
              <li><a class="dropdown-item" href="#">C동</a></li>
              <li><a class="dropdown-item" href="#">D동</a></li>
              <li><a class="dropdown-item" href="#">E동</a></li>
              <li><a class="dropdown-item" href="#" onclick="sanyoung();">산학융합관</a></li>

            </ul>
          </div>
        <div class="card mb-4">
            <table class="table" style="display:none;" id="sanyoung">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">사유</th>
                        <th scope="col">신고버튼</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">201~9호</th>
                        <td><textarea tpye="text" id="reportreason"></textarea></td>
                        <td><button type="submit" >신고하기</button></td>
                    </tr>
                    <tr>
                        <th scope="row">301~9호</th>
                        <td><textarea tpye="text" id="reportreason"></textarea></td>
                        <td><button type="submit" >신고하기</button></td>
                    </tr>
                    <tr>
                        <th scope="row">401~9호</th>
                        <td><textarea tpye="text" id="reportreason"></textarea></td>
                        <td><button type="submit" >신고하기</button></td>
                    </tr>
                    <tr>
                        <th scope="row">501~9호</th>
                        <td><textarea tpye="text" id="reportreason"></textarea></td>
                        <td><button type="submit" >신고하기</button></td>
                    </tr>
                    <tr>
                        <th scope="row">601~9호</th>
                        <td><textarea tpye="text" id="reportreason"></textarea></td>
                        <td><button type="submit" >신고하기</button></td>
                    </tr>
                    <tr>
                        <th scope="row">701~9호</th>
                        <td><textarea tpye="text" id="reportreason"></textarea></td>
                        <td><button type="submit" >신고하기</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</main>
<footer class="py-4 bg-light mt-auto">
    <div class="container-fluid px-4">
        <div class="d-flex align-items-center justify-content-between small">
            <div class="text-muted">Copyright &copy; Your Website 2022</div>
            <div>
                <a href="#">Privacy Policy</a>
                &middot;
                <a href="#">Terms &amp; Conditions</a>
            </div>
        </div>
    </div>
</footer>
</div>
</div>
`
exports.script = `
<script>
    function sanyoung(){
        var sanyoung = document.getElementById('sanyoung');
        if(sanyoung.style.display == 'block'){
            sanyoung.style.display = 'none';
        }
        else{
            sanyoung.style.display = 'block';
        }
    }
</script>
`