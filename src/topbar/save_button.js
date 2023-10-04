import React from 'react';
import { observer } from 'mobx-react-lite';
import { Button, Position, Menu, HTMLSelect, Slider } from '@blueprintjs/core';
import { Popover2 } from '@blueprintjs/popover2';
import * as unit from 'polotno/utils/unit';
import { t } from 'polotno/utils/l10n';

export const SaveButton = observer(({ store }) => {
  const [saving, setSaving] = React.useState(false);
  const [quality, setQuality] = React.useState(1);
  const [type, setType] = React.useState('png');




//   store.on('change',(e)=>{
//     console.log("store is changing", e)
//   })
//   this function used to save Data
  const saveData = async ()=>{
    // store.saveAsImage({ fileName: 'polotno.png' });
    var json = store.toJSON();
    console.log("this is json to save ", json)
    store.loadJSON(json);

    // a user can undo this action
    store.loadJSON(json,true);
  }

  return (
      <Button
        icon="import"
        text={t('Save')}
        intent="primary"
        loading={saving}
        onClick={saveData}
      />
    
  );
});
