<div id="nav" class="top">
  <a href="/" id="symbol">Home</a>
  <ul>
    <li>
      <a <?php if($page === 'collections') {echo('class="active" href="#"');} else {echo('href="/collections/"');}; ?> >Collections</a>
    </li>
    <li>
      <a <?php if($page === 'heritage') {echo('class="active" href="#"');} else {echo('href="/heritage/"');}; ?> ><i>Our</i> Heritage</a>
    </li>
    <li>
      <a <?php if($page === 'news') {echo('class="active" href="#"');} else {echo('href="/news/"');}; ?> >News</a>
    </li>
    <li>
      <a <?php if($page === 'stores') {echo('class="active" href="#"');} else {echo('href="/stores/"');}; ?> ><i>Our</i> Stores</a>
    </li>
  </ul>
</div>
