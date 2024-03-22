* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Noto Sans TC", sans-serif;
}



body {
  font-weight: 400;
  min-height: 100vh;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  position: relative;
  margin-bottom: -90px;
  flex-direction: column;
  
  background: radial-gradient(
    2224px at 10.6% 8.8%,
    rgb(255, 255, 255) 0%,
    rgb(153, 202, 251) 100.2%
  );
}

.dark-mode .content-container{
  min-height: 95vh;
}

.light-mode .content-container{
  min-height: 95vh;
  background: radial-gradient(2224px at 10.6% 8.8%, rgb(255, 255, 255) 0%, rgb(153, 202, 251) 100.2%);
}
.switch {
  font-size: 17px;
  position: relative;
  display: inline-block;
  width: 64px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73c0fc;
  transition: 0.4s;
  border-radius: 30px;
}
html {
  scroll-behavior: smooth;
}
#myBtn {
  scale:1.25;
  margin:10px;
  display: none; 
  position: fixed; 
  bottom: 75px;
  left: 25px; 
  z-index: 99;
  border: none; 
  outline: none; 
  cursor: pointer; 
  width: 45px;
  padding: 13px;
  height: 45px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: #6c6c6c 0px 0px 10px 0px;
}

#myBtn:hover {
  filter: invert(100%);
}

.dark-mode #myBtn {
  scale:1.25;
  margin:10px;
  display: none; 
  position: fixed; 
  bottom: 75px;
  left: 25px; 
  z-index: 99;
  border: none; 
  outline: none; 
  cursor: pointer; 
  width: 45px;
  padding: 13px;
  height: 45px;
  filter: invert(0%);
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  box-shadow: #6c6c6c 0px 0px 10px 0px;
}

.dark-mode  #myBtn:hover {
    filter: invert(100%);
}

.slider:before {
  position: absolute;
  content: "";
  height: 30px;
  width: 30px;
  border-radius: 20px;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  background-color: #e8e8e8;
  transition: 0.4s;
}

.sun svg {
  position: absolute;
  top: 6px;
  left: 36px;
  z-index: 1;
  width: 24px;
  height: 24px;
}

.moon svg {
  fill: #73c0fc;
  position: absolute;
  top: 5px;
  left: 5px;
  z-index: 1;
  width: 24px;
  height: 24px;
}

/* .switch:hover */
.sun svg {
  animation: rotate 15s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* .switch:hover */
.moon svg {
  animation: tilt 5s linear infinite;
}

@keyframes tilt {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.input:checked + .slider {
  background-color: #183153;
}

.input:focus + .slider {
  box-shadow: 0 0 1px #183153;
}

.input:checked + .slider:before {
  transform: translateX(30px);
}
.container-xl {
  position: relative;
  width: 100%;
  flex: 1;
  /* Take remaining vertical space */
}

.text {
  font-size: 40px;
  color: rgb(255, 255, 255);
  letter-spacing: 10px;
  border-right: 5px solid black;
  white-space: nowrap;
  animation: typing 5s steps(12) infinite,
  cursor 0.4s step-end infinite alternate;
  overflow: hidden;
  animation-fill-mode: forwards;
}

@keyframes cursor {
  50% {
    border-color: transparent;
  }
}

@keyframes typing {
  from {
    width: 0;
  }

  to {
    width: 65%;
  }
}

.text-center {
  margin-left: auto;
  margin-right: auto;
}

body.dark-mode {
  background: linear-gradient(
    112.1deg,
    rgba(0, 60, 255, 0.756) 11.4%,
    rgb(63, 76, 119) 70.2%
  );
  color: #c0a5ff;
}

body.dark-mode::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(1, 1, 1, 0.9);
  z-index: -1;
}

.main {
  position: relative;
  width: 48rem;
  height: 100%;
  text-align: center;
  padding: 4rem;
  border-radius: 2em;
  background-clip: padding-box;
}

.light-mode .main {
  background: rgba(255, 255, 255, 0.447);
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset,
    rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #000;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dark-mode .dropdown-content {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.9);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.show {
  display: block;
}

.dark-mode .main {
  background: rgba(83, 83, 83, 0.25);
  box-shadow: rgba(145, 56, 255, 0.35) 0px 30px 100px 0px;
  border: 2px solid rgba(146, 56, 255, 0.711);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  color: #e8e8e8;
}

.main {
  position: relative;
  width: 48rem;
  height: 100%;
  text-align: center;
  padding: 4rem;
  border-radius: 2em;
  backdrop-filter: blur(45px);
  background-clip: padding-box;
}

.list-group-item {
  font-size: 1.3rem;
  margin: 0.4rem;
  text-align: left;
  border-radius: 1rem !important;
  word-break: break-all;
  word-wrap: break-word;
  padding: 0.75rem;
  width: 80%;
}

.list-group-item button {
  margin: 0 0.2rem;
  padding: 0.4rem 1rem;
  border-radius: 5rem;
}

.list-group-item button ion-icon {
  pointer-events: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
  cursor: pointer;
}

.list {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.main h2,
h3 {
  font-weight: 600;
}

@media screen and (max-width: 415px) {
  .main_form .form_btn {
    font-size: 1rem;
    padding: 0.2rem 0.8rem;
  }

  .main {
    width: 100%;
    height: 380px;
    padding: 1rem;
  }

  .main_form #item {
    font-size: 1rem;
  }
}

@media (max-width: 960px) {
  .main {
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
}

.message {
  width: 300px;
  padding: 15px;
  border: 2px solid;
  border-radius: 5px;

  position: fixed;
  z-index: 10;
  top: 20px;
  right: 20px;
}

.success-message {
  color: #0f5132;
  background-color: #d1e7dd;
  border-color: #badbcc;
}

.danger-message {
  color: #842029;
  background-color: #f8d7da;
  border-color: #f5c2c7;
}

.form-check-input {
  position: relative;
  margin-left: 10px;
  margin-right: 5px;
}

#dueDate::placeholder {
  color: #fff;
}

#dueDate:hover::placeholder {
  color: #fff;
  opacity: 1;
}

.hidden {
  display: none;
}

input[type="checkbox"]:not(.task-completed) {
  position: relative;
  width: 80px;
  height: 40px;
  -webkit-appearance: none;
  appearance: none;
  background: #000;
  outline: none;
  border-radius: 2rem;
  cursor: pointer;
  box-shadow: inset 0 0 5px rgba(1, 110, 225);
}

input[type="checkbox"]:not(.task-completed)::before {
  content: "";
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.5s;
}

input[type="checkbox"]:not(.task-completed):checked::before {
  transform: translateX(100%);
  background: #fff;
}

.custom-confirm,
.custom-confirm-all {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  align-items: flex-start;
  justify-content: center;
}

.confirm-content,
.confirm-content-all {
  background-color: #fff;
  padding: 20px;
  top: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  font-size: 20px;
  color: #333;
}

h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

h4 {
  color: #000;
}

.confirm-content,
.confirm-content-all p {
  margin-bottom: 20px;
}

#confirm-yes,
#confirm-no,
#confirm-yes-all,
#confirm-no-all {
  margin: 10px;
  padding: 10px 30px;

  cursor: pointer;
  border-radius: 5px;
}

@media screen and (max-width: 768px) {
  .mode-toggle {
    margin-left: 20px;
  }

  .form_btn {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }

  .form_btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    width: auto;
  }
}

@media screen and (max-width: 570px) {
  .form_btn {
    font-size: 1rem;
    padding: 0.8rem 2rem;
  }

  .main_form {
    flex-direction: column;
    border-radius: 2rem;
  }

  .main_form input[type="text"] {
    width: 100%;
    margin: 0.5rem;
  }

  .list-group {
    margin-top: 1rem;
  }
}

@media screen and (max-width: 424px) {
  .main_form input[type="text"] {
    width: 100%;
  }

  .list-group-item button {
    margin: 0;
    padding: 0.2rem 0.5rem;
    border-radius: 1rem;
  }

  .form_btn {
    padding: 0.7rem 1rem;
    margin: 1rem;
  }

  .list-group {
    margin-top: 1rem;
  }

  #dueDate {
    padding: 0.7rem 1rem;
    margin: auto;
  }
}

@media screen and (max-width: 390px) {
  .list-group-item {
    padding: 0.3rem;
  }

  .list-group {
    margin-top: 1rem;
  }

  .main_form .form_btn {
    font-size: 0.7rem;
    padding: 0.7rem 1rem;
  }

  #dueDate {
    font-size: smaller;
    width: 120px;
    height: 35px;
    margin: auto;
    padding: 0;
  }
}
body:not(.dark-mode)::-webkit-scrollbar {
  width: 12px;
  background-color: #dfe6e9;
}

body:not(.dark-mode)::-webkit-scrollbar-track {
  border: 5px solid white;
  background-color: #6c6c6c;
}

body:not(.dark-mode)::-webkit-scrollbar-thumb {
  background-color: #74b9ff;
  border-radius: 10px;
}

body.dark-mode::-webkit-scrollbar {
  width: 12px;
  background-color: #000000;
}

body.dark-mode::-webkit-scrollbar-track {
  border: 5px solid rgb(0, 0, 0);
  background-color: #ffffff;
}

body.dark-mode::-webkit-scrollbar-thumb {
  background-color: rgb(146, 56, 255);
  border-radius: 10px;
}
/* Preloader Starts */
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.writing-loader {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  position: absolute;
}
.writing-loader * {
  position: absolute;
  color: #0081a7;
}
.writing-loader .file-text {
  color: #0081a7;
  opacity: 0;
  animation: fileAppear-1 8s 0s linear infinite;
  position: absolute;
}
@keyframes fileAppear-1 {
  10% {
    opacity: 0;
  }
  25% {
    opacity: 1;
  }
  30% {
    opacity: 1;
  }
  33% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.writing-loader .pen-container {
  display: flex;
  justify-content: center;
  align-items: center;
  top: -50px;
  left: -25px;
  width: 40px;
  height: 40px;
  animation: writing 3s linear infinite;
}
@keyframes writing {
  from {
    transform: translate(0, 0);
  }
  5% {
    transform: translate(100%, 0);
  }
  15% {
    transform: translate(0%, 25%);
  }
  20% {
    transform: translate(100%, 25%);
  }
  25% {
    transform: translate(0%, 50%);
  }
  30% {
    transform: translate(100%, 50%);
  }
  35% {
    transform: translate(0%, 75%);
  }
  40% {
    transform: translate(100%, 75%);
  }
  45% {
    transform: translate(0%, 100%);
  }
  50% {
    transform: translate(100%, 100%);
    opacity: 1;
  }
  100% {
    transform: translate(100%, 100%);
    opacity: 0;
  }
}
.writing-loader .pen-container .pen {
  color: #000000;
  font-size: 2.5rem;
}
/* Preloader Ends  */

/*Task priority indicator*/
.light-mode .task-priority-High {
  border-left: 6px solid rgba(255, 0, 0, 0.474);
}

.light-mode .task-priority-Medium {
  border-left: 6px solid rgba(255, 166, 0, 0.447);
}

.light-mode .task-priority-Low {
  border-left: 6px solid rgba(0, 128, 0, 0.474);
}

.light-mode .task-completed {
  text-decoration: line-through;
  border-left: 6px solid rgba(8, 0, 255, 0.474);
}

.dark-mode .task-priority-High {
  border-left: 6px solid rgba(255, 0, 0, 0.737);
}

.dark-mode .task-priority-Medium {
  border-left: 6px solid rgba(255, 166, 0, 0.871);
}

.dark-mode .task-priority-Low {
  border-left: 6px solid rgba(0, 189, 0, 0.795);
}

.dark-mode .task-completed {
  text-decoration: line-through;
  border-left: 6px solid rgba(174, 75, 255, 0.914);
}

/*Task priority indicator end*/

option:hover {
  background-color: white;
  color: white;
}

select {
  width: 150px;
}

select option {
  width: 150px;
}

.light-mode #voice-command-button {
  scale:1.25;
  margin:10px;
  background-color: #000000;
  position: fixed;
  bottom: 72px;
  right: 20px;
  z-index: 1000;
  cursor: pointer; 
  border: none; 
  outline: none; 
  transition:  0.6s ease; 
  box-shadow: #0000008b 0px 0px 6px 0px;
}

.light-mode #voice-command-button:hover{
  box-shadow: #000000 0px 0px 10px 0px;
}
.dark-mode #voice-command-button i{
  color: rgb(0, 0, 0) ;
}
.light-mode #voice-command-button i{
  color: rgb(159, 221, 255) ;
}


.dark-mode #voice-command-button {
  scale:1.2;
  margin:10px;
  background-color: #ffffff;
  position: fixed;
  bottom: 72px;
  right: 22px;
  z-index: 1000;
  transition:  0.4s ease; 
  box-shadow: #b1b1b1 0px 0px 8px 0px;
}
.dark-mode #voice-command-button:hover{
  background-color: #e5e5e5;
  box-shadow: #b1b1b1 0px 0px 19px 0px;
}
/* new css for form */
#item,
#priority,
#dueDate {
  width: calc(33.33% - 10px);
  margin-bottom: 10px;
}
#item {
  width: 100%;
  padding: 15px;
}
/* css for the priority selection */

#dueDate {
  cursor: pointer;
}

#description {
  width: 100%;
  padding: 15px;
  text-overflow: ellipsis;
  border-radius: 8px;
  height: 80px;
  resize: none;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

#description::-webkit-scrollbar {
  display: none;
}

/* css for the submit button addForm */

.dark-mode #submitBtn:disabled {
  border-color: #27272790;
  background-color: #47474796;
  color: #f3f1f1;
}

@media screen and (max-width: 600px) {
  #addForm {
    padding: 20px;
  }

  #item,
  #priority,
  #dueDate,
  #description {
    width: 100%;
  }

  #submitBtn,
  #editTask {
    width: 100%;
  }
}

#addForm input {
  border-radius: 30px;
  max-height: 60px;
  margin-right: 10px;
}

#priority {
  padding: 7px;
  max-height: 60px;
  margin-right: 10px;
  border-radius: 20px;
  border-style: none;
  border: 2px solid rgba(70, 70, 70, 0.873);
  transition: 0.3s ease-in;
}

.dark-mode #priority {
  padding: 7px;
  max-height: 60px;
  margin-right: 10px;
  border-radius: 20px;
  border-style: none;
  border: 3px solid rgb(146, 56, 255);
  transition: 0.3s ease-in;
}
#dueDate {
  max-width: 150px;
}

#item {
  max-width: 200px;
}

ul {
  list-style-type: disc;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
}
ul.list-group {
  width: auto;
}

li {
  margin: 10px;
}

.voice-input {
  border-radius: 30px;
}

.titleText {
  color: #79c5ff;
}

.light-mode .footer-down {
  flex-direction: column !important;
  position: -webkit-sticky;
  position: relative;
  bottom: 0;
  height: 5vh;

  color: rgb(101, 101, 101);
  padding-top: 10px;
  padding-left: 0px;
  max-width: auto;
  background: radial-gradient(2224px at 10.6% 8.8%, rgb(255, 255, 255) 0%, rgb(175, 215, 255) 100.2%);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  
}
.dark-mode .footer-down {
  position: -webkit-sticky;
  position: relative !important;
  bottom: 0;
  height: 5vh;
  color: rgb(255, 255, 255);
  padding-top: 10px;
  padding-left: 0px;
  max-width: auto;
  background: rgba(193, 99, 255, 0.25);
  backdrop-filter: blur( 4px );
  -webkit-backdrop-filter: blur( 4px );
  border: 1px solid rgba( 255, 255, 255, 0.18 );
}

.light-mode .inputcss {
  width: 100%;
  border-radius: 20px;
  height: 40px;
  padding: 0 20px;
  border-style: none;
  background-color: rgba(255, 255, 255, 0.536);
  border: 2px solid rgba(70, 70, 70, 0.873);
  transition: 0.3s ease-in;
  margin-left: 5px;
}

.dark-mode .inputcss {
  width: 100%;
  border-radius: 20px;
  height: 40px;
  padding: 0 20px;
  border-style: none;
  background-color: rgb(255, 255, 255);
  border: 3px solid rgb(146, 56, 255);
  transition: 0.3s ease-in;
}

.checkbox:checked:before {
  background-color: green;
}

.dark-mode .btn-outline-dark {
  color: rgb(146, 56, 255);
  border-color: rgb(146, 56, 255);
}
.dark-mode .btn-outline-dark:hover {
  color: #fff;
  background-color: rgb(146, 56, 255);
  border-color: rgb(146, 56, 255);
}

.dark-mode .btn-dark {
  color: #fff;
  background-color: rgb(146, 56, 255);
  border-color: rgb(146, 56, 255);
}

.dark-mode .btn-dark:hover {
  color: #fff;
  background-color: rgb(123, 52, 210);
  border-color: rgb(123, 52, 210);
}

.dark-mode .btn-dark:not(:disabled):not(.disabled).active,
.dark-mode .btn-dark:not(:disabled):not(.disabled):active,
.dark-mode .show > .dark-mode .btn-dark.dropdown-toggle {
  color: #fff;
  background-color: rgb(123, 52, 210);
  border-color: rgb(123, 52, 210);
}

.light-mode .custom-confirm,
.light-mode .custom-confirm-all {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  align-items: flex-start;
  justify-content: center;
}

.dark-mode .confirm-content,
.dark-mode .confirm-content-all {
  background: rgb(24, 24, 24);
  padding: 20px;
  top: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
}

.light-mode #myDropdown .a1 {
  background: #00bfffd5;
}
.light-mode #myDropdown .a2 {
  background: #0091dfd8;
}
.light-mode #myDropdown .a3 {
  background: #006dcdcc;
}
.light-mode #myDropdown .a4 {
  background: #0075cea5;
}

.dark-mode #myDropdown .a1 {
  background: #8000ffd5;
}
.dark-mode #myDropdown .a2 {
  background: #8d00dfd8;
}
.dark-mode #myDropdown .a3 {
  background: #8c00cdcc;
}
.dark-mode #myDropdown .a4 {
  background: #8d00cea5;
}

.light-mode #myDropdown {
  color: rgba(1, 63, 97, 0.967);
}

.dark-mode #myDropdown {
  color: rgba(47, 0, 65, 0.967);
}

#myDropdown a:hover{
  color:white;
}

.github-icon{
  position: absolute;
    cursor: pointer;
    top: 25px;
    right: 35px;
    bottom: 0px;
    transition: all 0.4s ease 0s;
}

.light-mode .github-icon a i{
  font-size: 50px;
  color:black !important;
}

.dark-mode .github-icon a i{
  font-size: 50px;
  color:rgb(227, 227, 227) !important;
}