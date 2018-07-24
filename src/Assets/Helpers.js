  const g = window;
  const d = document;

  //-------------------------------------
  // HELPER FUNCTIONS
  // querySelector
  function el(Target, Parent) {
    let parent; 
    typeof Parent === 'string' ? parent = el(Parent) : parent = Parent;
    return (parent || d).querySelector(Target);
  }

  // querySelectorAll
  function els(Target, Parent) {
    let parent;
    typeof Parent === 'string' ? parent = el(Parent) : parent = Parent;
    return (parent || d).querySelectorAll(Target);
  }

  //------------ 
  // css 속성 확인해주는 helper 함수
  function getStyle(Target, Pseudo, Property) {
    let target;
    typeof Target === 'string' ? target = g.getComputedStyle(el(Target), Pseudo) : target = g.getComputedStyle(Target, Pseudo);
    return target.getPropertyValue(Property);
  }

  //------------
  // css 속성 바꿔주는 helper 함수
  function setStyle(Target, Property, Value) {
    let set_style;
    typeof Target === 'string' ? set_style = el(Target).style.setProperty(Property, Value) : set_style = Target.style.setProperty(Property, Value);
    return set_style;
  }
  //------------

  //------------
  // css class 추가 && 제거
  function toggleClass(Target, Name) {
    // 해당 요소의 classList를 확인해서
    let target_class;
    // target 값이 문자열이면 target 요소를 선택한 후 classList 반환
    typeof Target === 'string' ? target_class = el(Target).classList : target_class = Target.classList;
    // 클랙스 리스트에 name값이 없으면 클래스 리스트에 추가해주고 있으면 리스트에서 제거
    target_class.contains(Name) !== true ? target_class.add(Name) : target_class.remove(Name);
  }

  //------------
  // css class 추가
  function addClass(Target, Name) {
    let target_class;
    // 해당 요소의 classList를 확인해서
    typeof Target === 'string' ? target_class = el(Target).classList : target_class = Target.classList;
    // 클래스 리스트에 추가
    target_class.add(Name);
  }

  //------------
  // css class 제거
  function removeClass(Target, Name) {
    let target_class;
    // 해당 요소의 classList를 확인해서
    typeof Target === 'string' ? target_class = el(Target).classList : target_class = Target.classList;
    // 클래스 리스트에 제거
    target_class.remove(Name);
  }

export { 
  el,
  els,
  getStyle, 
  setStyle,
  toggleClass,
  addClass,
  removeClass
};