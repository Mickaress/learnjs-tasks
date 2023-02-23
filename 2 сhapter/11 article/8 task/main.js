if (-1 || 0) alert( 'first' ); // alert выполнится, так как -1 даст true

if (-1 && 0) alert( 'second' ); // alert не выполнится, так как 0 даст false

if (null || -1 && 1) alert( 'third' ); // alert выполнится, так как сначала -1 && 1 дадут 1, и null || 1 дадут true